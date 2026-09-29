(function () {
    // Timeframe selector interaction
    const timeframeButtons = document.querySelectorAll('.timeframe-btn');
    timeframeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeframeButtons.forEach(b => {
                b.classList.remove('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
                b.classList.add('text-on-surface-variant', 'font-medium');
            });
            btn.classList.remove('text-on-surface-variant', 'font-medium');
            btn.classList.add('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
        });
    });

    // Chart metric tab selector interaction
    const chartTabButtons = document.querySelectorAll('.chart-tab-btn');
    chartTabButtons.forEach(tab => {
        tab.addEventListener('click', () => {
            chartTabButtons.forEach(t => {
                t.classList.remove('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
                t.classList.add('text-on-surface-variant', 'font-medium');
            });
            tab.classList.remove('text-on-surface-variant', 'font-medium');
            tab.classList.add('bg-primary-container', 'text-on-primary', 'font-semibold', 'shadow-sm');
        });
    });

    // Refresh simulation trigger
    const refreshBtn = document.getElementById('btn-refresh');
    const syncLabel = document.getElementById('sync-time-label');
    if (refreshBtn && syncLabel) {
        refreshBtn.addEventListener('click', () => {
            syncLabel.textContent = 'Actualizando...';
            const icon = refreshBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.classList.add('animate-spin');

            setTimeout(() => {
                syncLabel.textContent = 'Hace 1 segundo';
                if (icon) icon.classList.remove('animate-spin');
            }, 700);
        });
    }

    // Export CSV click trigger
    const exportBtn = document.getElementById('btn-export-csv');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const originalText = exportBtn.innerHTML;
            exportBtn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-bounce">check</span><span class="font-medium">Generando CSV...</span>';
            setTimeout(() => {
                exportBtn.innerHTML = originalText;
            }, 1500);
        });
    }
})();
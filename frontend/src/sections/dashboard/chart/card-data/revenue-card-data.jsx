// chart data
import { revenueChartData } from '../chart-data/revenue-chart-data';

export const revenueCardData = {
  title: 'Finalistas por facultad',
  chartData: revenueChartData,
  bottomData: [
    { label: 'Centro de Bariloche', value: '45', color: 'primary.main' },
    { label: 'Ingenieria', value: '35', color: 'success.main' },
    { label: 'Informatica', value: '20', color: 'warning.main' }
  ]
};

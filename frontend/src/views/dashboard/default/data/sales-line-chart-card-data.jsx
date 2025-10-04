// assets
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// chart data
import { salesLineChart } from 'sections/dashboard/chart/chart-data/sales-line-chart';

export const salesLineCardData = {
  chartData: salesLineChart,
  footerData: [
    {
      value: '45',
      label: 'Total de partidos'
    },
    {
      value: '12',
      label: 'Partidos de hoy'
    }
  ],
  title: 'Partidos por dia',
  percentage: '15%',
  icon: TrendingDownIcon,
  bgColor: 'primary.main'
};

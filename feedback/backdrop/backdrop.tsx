// 导入头文件
import { Backdrop, CircularProgress } from '@mui/material'

{/* backdrop-true-false */}
const [loading, setLoading] = React.useState(false)

{/* feedback-backdrop */}
<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>

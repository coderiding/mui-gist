// 导入头文件
import { Backdrop } from '@mui/material'

// 定义加载条件
const [loading, setLoading] = React.useState(false)

// 使用控件1
<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>
import { createRoot } from 'react-dom/client'
import { Todoapp } from './components/Todoapp'
import '../index.css'
const root = createRoot(document.getElementById('app'))

root.render(
	<Todoapp/>
)

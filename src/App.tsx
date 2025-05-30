import './App.css'
import { Route, Routes } from 'react-router-dom'
import Term from './pages/Term'
import DeleteAccount from './pages/DeleteAccount'
import { Affix, Button, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IoIosArrowUp } from 'react-icons/io'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
    const [scroll, scrollTo] = useWindowScroll()
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<Term />} />
                <Route path="/delete-account" element={<DeleteAccount />} />
                {/* Catch-all route pour 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            style={transitionStyles}
                            className="!bg-[#0c0] !w-[40px] !h-[40px] !p-0 !rounded-full !border-2 !border-white"
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <IoIosArrowUp size={30} />
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    )
}

export default App

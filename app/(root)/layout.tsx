import { ReactNode } from 'react'

const Rootlayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='root-layout'>
            {children}
        </div>
    )
}

export default Rootlayout

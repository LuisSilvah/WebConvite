import { Outlet } from "react-router-dom"

export function LayoutPage() {
    return (
        <div>
            <h1>Layout</h1>

            <Outlet />

        </div>
    )
}
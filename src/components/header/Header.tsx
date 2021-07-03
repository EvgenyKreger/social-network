import React from "react";
import headerCss from './Header.module.css'
export function Header() {
    return (

        <header className={headerCss.header}>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b56dbd01-9e07-4e1d-a3f6-ced0f30bff6b/d51aibv-e91e5df0-f339-4537-97d1-5a96233ab5fc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I1NmRiZDAxLTllMDctNGUxZC1hM2Y2LWNlZDBmMzBiZmY2YlwvZDUxYWlidi1lOTFlNWRmMC1mMzM5LTQ1MzctOTdkMS01YTk2MjMzYWI1ZmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.16nY8_qagw0VFTrJK6zPj8k7rpRjrhdG5fRaBiFHrXI"
                alt="image"/>

     <span>Welcome to network city</span>

        </header>

    )
}
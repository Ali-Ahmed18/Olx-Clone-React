import React from 'react'
import { logo3 } from '../assets/images'

function NavbarCategories({responsive}) {
    return (
        <>
            <section className="border-b-2 py-3">
                <ul className={`${responsive ? responsive : "hidden"} flex lg:flex gap-4 fs-3 text-sm w-[94%] mx-auto`}>
                    <li><a className="flex gap-3 font-bold" href="#">All categories <img src={logo3} /></a></li>
                    <li><a href="#" >Mobile Phones</a></li>
                    <li><a href="#">Car</a></li>
                    <li><a href="#">Motorcycles</a></li>
                    <li><a href="#">Houses</a></li>
                    <li><a href="#">TV-Videos-Audio</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#" >Lands & Plots</a></li>
                </ul>
            </section>
        </>
    )
}

export default NavbarCategories
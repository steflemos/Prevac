import React, { useEffect } from "react";

import Navigationteste from "./NavigationComponent";

const Navigation = () => {
    useEffect(() => {
        // Seleciona os itens clicados
        const menuItem = document.querySelectorAll('.item-menu');

        function selectLink(){
            menuItem.forEach((item) =>
                item.classList.remove('ativo')
            );
            this.classList.add('ativo');
        }

        menuItem.forEach((item) =>
            item.addEventListener('click', selectLink)
        );

        // Expandir o menu
        const btnExp = document.querySelector('#btn-exp');
        const menuSide = document.querySelector('.menu-lateral');

        btnExp.addEventListener('click', function(){
            menuSide.classList.toggle('expandir');
        });

        // Cleanup function to remove event listeners
        return () => {
            menuItem.forEach((item) =>
                item.removeEventListener('click', selectLink)
            );
            btnExp.removeEventListener('click', function(){
                menuSide.classList.toggle('expandir');
            });
        };
    }, []);

    return (
        
        <div >
            <Navigationteste/>
        </div>
    );
}

export default Navigation;

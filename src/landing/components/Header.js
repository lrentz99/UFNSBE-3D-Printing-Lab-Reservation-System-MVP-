import React from 'react'


const Header = (props) => (
    <div>
        <h2>Design it. Create it.</h2>
        <p>Get started with 3D printing by reserving a printer in the NEB 3D Printing Lab</p>
    </div>
);

Header.defaultProps = {
    team: 'Understand My Spend'
}

export default Header;
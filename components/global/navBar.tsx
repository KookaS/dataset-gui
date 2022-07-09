import { Button } from "@nextui-org/react";
import { NavButton } from "./navButton";
import Styled from 'styled-components';

export const NavBarPadding = Styled.span`
    width: 100%;
    display: block;
`;

interface NavBarProps {
    currentPage: string,
}

export const NavBar = ({ currentPage }: NavBarProps): JSX.Element =>
    <NavBarPadding className="NavBarPadding">
        <Button.Group light>
            <NavButton href={"/imagesPending"} title="imagesPending" currentPage={currentPage}>ImagesPending</NavButton>
            <NavButton href={"/imagesWanted"} title="imagesWanted" currentPage={currentPage}>ImagesWanted</NavButton>
            <NavButton href={"/imagesUnwanted"} title="users" currentPage={currentPage}>ImagesUnwanted</NavButton>
            <NavButton href={"/tags"} title="tags" currentPage={currentPage}>Tags</NavButton>
            <NavButton href={"/users"} title="users" currentPage={currentPage}>Users</NavButton>
        </Button.Group>
    </NavBarPadding>


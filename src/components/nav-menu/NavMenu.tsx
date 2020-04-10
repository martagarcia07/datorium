import * as React from 'react';
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
// import GlobalLanguageComboContainer from './../language-combo/containers/GlobalLanguageComboContainer';
import './NavMenu.css';

export class NavMenu extends React.Component {

    public render() {
        return ( null
        /*<Navbar inverse={true} fixedTop={true} fluid={true} collapseOnSelect={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'}>react-aspnetcore</Link>
                    <GlobalLanguageComboContainer />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to={'/'} exact={true}>
                        <NavItem>
                            <Glyphicon glyph='home' /> Home
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/banners'}>
                        <NavItem>
                            <Glyphicon glyph='th' /> Banners
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/content/addBasicNewContent'}>
                    <NavItem>
                        <Glyphicon glyph='thumbs-up' /> Add Basic New Content
                    </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>*/
        );
    }
}

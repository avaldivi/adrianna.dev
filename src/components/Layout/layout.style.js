import styled from "styled-components"

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr 1fr 1fr;
  grid-template-rows: 0.3fr 1.7fr 1fr 1.7fr 0.3fr;
  grid-template-areas: "top-navigation top-navigation top-navigation top-navigation" "sidebar main-content main-content main-content" "sidebar main-content main-content main-content" "sidebar main-content main-content main-content" "footer footer footer footer";
`

export const MainContent = styled.div`
  grid-area: main-content;
  background-color: white;
`

export const TopNavigation = styled.div`
  grid-area: top-navigation;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70px;

  @media ${device.tablet} {
    width: 200px;
  }
`
export const Footer = styled.div`
  grid-area: footer;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
`

export const SidebarWrapper = styled.div`
  color: white;
  font-size: 35px;
  padding: 10px;
`

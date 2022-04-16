import styled from "styled-components";
import Image from "next/image";
import Motion from "../Motion/Motion";

import Box from "../Box/Box";

const SocialLinks = [
	// TODO: Update links url's
	{
		name: 'Discord',
		imgUrl: '/SocialLinks/Discord.svg',
		url: '#'
	},
	{
		name: 'Keybase',
		imgUrl: '/SocialLinks/Keybase.svg',
		url: '#'
	},
	{
		name: 'DAOTalk',
		imgUrl: '/SocialLinks/DAOTalk.svg',
		url: '#'
	},
];

const Navbar = () => {
  return (
		<Motion initialPositionY={-100}>
			<StyledNavbar className="navbar" size="full" dataAos="fade-down">
				<Box size="large" className="navbar-inner-container">
					<img 
						className="logo" 
						src="/CarrotLogo.svg"
					/>
					<section className="navbar-links">
						<span>Join the DXdao Community</span>
						<span className="separator"></span>
						<ul>
							{SocialLinks.map(link => (
								<li key={link.name}>
									<a href={link.url}>
										<img src={link.imgUrl} alt={link.name} />
									</a>
								</li>
							))}
						</ul>
					</section>
				</Box>
			</StyledNavbar>
		</Motion>
  );
};

const StyledNavbar = styled(Box)`
	height: 187px;
	.navbar-inner-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.logo {
			width: 188px;
		}
		.navbar-links {
			display: flex;
			align-items: center;
			.separator {
				display: inline-block;
				width: 60px;
				height: 1px;
				background: ${props => props.theme.colors.gray200};
				margin: 0 22px;
			}
			ul {
				display: flex;
				li {
					margin: 0 7px;
					&:first-child {
						margin-left: 0;
					}
					&:last-child {
						margin-right: 0;
					}
					&:hover {
						img {
							opacity: 1;
						}
					}
					img {
						opacity: 0.6;
						transition: 0.25s ease-in-out all;
					}
				}
			}
		}
	}
`;

export default Navbar;

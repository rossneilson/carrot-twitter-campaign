import styled from "styled-components";
import Image from "next/image";
import Motion from "../Motion/Motion";

import Box from "../Box/Box";

const SocialLinks = [
	// TODO: Update links url's
	{
		name: 'Discord',
		imgUrl: '/SocialLinks/Discord.svg',
		url: 'https://discord.gg/4QXEJQkvHH'
	},
	{
		name: 'Keybase',
		imgUrl: '/SocialLinks/Keybase.svg',
		url: 'https://keybase.io/team/dx_dao'
	},
	{
		name: 'DAOTalk',
		imgUrl: '/SocialLinks/DAOTalk.svg',
		url: 'https://daotalk.org/c/dx-dao/15'
	},
];

const Navbar = () => {
  return (
		<Motion initialPositionY={-60}>
			<StyledNavbar className="navbar" size="full" dataAos="fade-down">
				<Box size="large" className="navbar-inner-container">
					<div className="logo">
						<Image 
							layout="responsive"
							src="/CarrotLogo.png"
							width={'100%'}
							height={'26%'}
						/>
					</div>
					<section className="navbar-links">
						<span>Join the DXdao Community</span>
						<span className="separator"></span>
						<ul>
							{SocialLinks.map(link => (
								<li key={link.name}>
									<a href={link.url} target="_blank" rel="noreferrer">
										<Image 
											src={link.imgUrl} 
											alt={link.name} 
											layout={'responsive'}
											width={'100vw'}
											height={'100vw'}
										/>
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
			height: 54px;
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
					opacity: 0.8;
					transition: 0.25s ease-in-out all;
					&:first-child {
						margin-left: 0;
					}
					&:last-child {
						margin-right: 0;
					}
					&:hover {
						opacity: 1;
					}
					a {
						width: 28px;
						height: 28px;
						display: inline-block;
					}
				}
			}
		}
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.l}) {
		height: 68px;
		.navbar-inner-container {
			.logo {
				width: 140px;
			}
			.navbar-links {
				display: none;
			}
		}
	}
`;

export default Navbar;

import React from 'react';
import styled from 'styled-components';

const Showbox = styled.div`
	padding: 25px;
	width: 100%;
`;

const Loader = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	width: 100px;
    margin: 0 auto;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;

const Circular = styled.svg`
    position: absolute;
	animation: rotate 2s linear infinite;
    transform-origin: center center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
	margin: auto;

	@keyframes rotate {
		100% {
			transform: rotate(360 deg);
		}
	}
`;

const Path = styled.circle`
	stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
	stroke-linecap: round;
	
	@keyframes dash {
		0% {
			stroke-dasharray: 0, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -120px;
		}
	}
	@keyframes color {
		0% {
			stroke: #dd2222;
		}
		40%,
		60% {
			stroke: #008844;
		}
		80%,
		100% {
			stroke: #ffff00;
		}
	}
`;

export function Preloader() {
	return (
		<Showbox>
			<Loader>
				<Circular viewBox="25 25 50 50">
					<Path
						cx='50'
						cy="50"
						r="20"
						fill="none"
						strokeWidth="2"
						strokeMiterlimit="10"
					/>
				</Circular>
				Загрузка...
			</Loader>
		</Showbox>
	)
}
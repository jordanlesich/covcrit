import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from{
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }
`;
export const fadeOut = keyframes`
  from{
    opacity: 1; 
  }
  to {
    opacity: 0; 
  }
  `;

export const slideUp = keyframes`
  from{
    transform: translate3D(0, 50%, 0); 
  }
  to {
    transform: translate3D(0, 0, 0) ;
  }
`;
export const slideDown = keyframes`
  from{
    transform: translate3D(0,0,0); 
  }
  to {
    transform: translate3D(0, 50%, 0) ;
  }
  `;
export const slideFromRight = keyframes`
  from{
    transform: translate3D(0, 0, 0); 
  }
  to {
    transform: translate3D(100%, 0, 0) ;
  }
`;
export const slideOutRight = keyframes`
  from{
    transform: translate3D(100%, 0, 0); 
  }
  to {
    transform: translate3D(0, 0, 0) ;
  }
`;
export const scaleIn = keyframes`
  from{
    transform: scale3d(0,0,0); 
  }
  to {
   transform: scale3d(1, 1, 1);
  }
  `;
export const scaleOut = keyframes`
  from{
    transform: scale3d(1, 1, 1); 
  }
  to {
    transform: scale3d(0,0,0); 
  }
  `;

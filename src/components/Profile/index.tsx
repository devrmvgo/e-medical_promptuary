import React from 'react';

// Style
import { StyledProfile, StyledAvatar } from './styles';

export default function Profile(): JSX.Element {
  return (
    <StyledProfile>
      OLÉEE
      <StyledAvatar
        src="https://www.petlove.com.br/images/breeds/194940/profile/original/bernese-p.jpg?1532380300"
        alt="Doguinho"
        sizes="large"
      />
    </StyledProfile>
  );
}

import React from 'react';
import {
  StyledFooterLayout,
  StyledFooterContent,
  StyledFooterLink,
} from './footer.styled';

export default function Footer() {
  return (
    <StyledFooterLayout>
      <div>
        <StyledFooterContent>
          장성우 (@swJaNG12) :
          <StyledFooterLink href="mailto:cbdjej38483@gmail.com">
            cbdjej38483@gmail.com
          </StyledFooterLink>
        </StyledFooterContent>
        <StyledFooterContent>
          김소희 (@esoby) :
          <StyledFooterLink href="mailto:esoby104@gmail.com">
            esoby104@gmail.com
          </StyledFooterLink>
        </StyledFooterContent>
        <StyledFooterContent>
          이승무 (@GoodSilver9) :
          <StyledFooterLink href="mailto:dltmdan12@gmail.com">
            dltmdan12@gmail.com
          </StyledFooterLink>
        </StyledFooterContent>
        <StyledFooterContent>
          최지완 (jiwanchoi) :
          <StyledFooterLink href="wldhks1509@gmail.com">
            wldhks1509@gmail.com
          </StyledFooterLink>
        </StyledFooterContent>
      </div>
      <div>
        <StyledFooterContent>
          <StyledFooterLink
            href="https://www.flaticon.com/kr/free-icon/lion-of-judah_3436895?term=사자&page=1&position=23&origin=search&related_id=3436895"
            target="_blank"
            title="사자 아이콘(파비콘)"
          >
            사자 아이콘 제작자: Freepik - Flaticon
          </StyledFooterLink>
        </StyledFooterContent>
      </div>
    </StyledFooterLayout>
  );
}

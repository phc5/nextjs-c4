import React from 'react';
import styled from 'styled-components';
import CleanupTable from './CleanupTable';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';

function MembersContent({ lastSection }: { lastSection?: boolean }) {
  return (
    <StyledMembersContainer lastSection={lastSection} data-scroll-js>
      <StyledSection>
        <StyledInner>
          <StyledInfoDiv>
            <h3>Reimbursement</h3>
            <StyledInfoButton
              type="button"
              href="https://form.jotform.us/jjy00n/reimbursement--funds-request-form"
              target="_blank"
              rel="noreferrer"
              aria-label="C4's Reimbursement Form"
            >
              <span>Reimbursement Form</span>
            </StyledInfoButton>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h3>C4 Members Mailing List</h3>
            <StyledInfoButton
              type="button"
              href="https://groups.google.com/forum/#!forum/c4ministry-members/join://form.jotform.us/jjy00n/reimbursement--funds-request-form"
              target="_blank"
              rel="noreferrer"
              aria-label="Join C4 Ministry Members Google Group"
            >
              <span>Join Mailing List</span>
            </StyledInfoButton>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h3>Online Offering/Tithe</h3>
            <StyledInfoButton
              type="button"
              href="https://venmo.com/c4ministry"
              target="_blank"
              rel="noreferrer"
              aria-label="C4's Venmo"
            >
              <span>Venmo</span>
            </StyledInfoButton>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h3>Cleanup Rotation</h3>
            <StyledCleanupInfo>
              <CleanupTable />
            </StyledCleanupInfo>
          </StyledInfoDiv>
          <StyledInfoDiv cleanupInstructions>
            <h3>Cleanup Instructions</h3>
            <StyledCleanupInfo>
              <ul>
                <li>Say hello to our senior pastor, James Park!</li>
                <li>Vacuum carpet upstairs and downstairs</li>
                <li>Wipe down dining tables</li>
                <li>
                  Sweep downstairs floor (kitchen, dining, &amp; sanctuary)
                </li>
                <li>Mop floor (kitchen, dining, &amp; sanctuary)</li>
                <li>Clean mirrors and toilets in both bathroom</li>

                <li>Wash dishes</li>
                <li>Organize elementary, CCM, and meeting rooms</li>
                <li>
                  Take out trash and replace trash bags (kitchen, bathrooms,
                  &amp; upstairs)
                </li>
                <li>Wash your hands</li>
                <li>Say goodbye to Pastor James Park!</li>
              </ul>
            </StyledCleanupInfo>
          </StyledInfoDiv>
        </StyledInner>
      </StyledSection>
    </StyledMembersContainer>
  );
}

const StyledMembersContainer = styled.div<{ lastSection: boolean }>`
  background-color: ${colors.blue};
  border-top: solid 2px rgba(190, 190, 255, 0.2);
  padding-top: 4em;
  ${props => props.lastSection && 'padding-bottom: 6em;'}
`;

const StyledSection = styled.section`
  color: ${colors.white};
  position: relative;
`;

const StyledInner = styled.div`
  display: grid;
  margin-bottom: 4em;
  padding: 4em 0 2em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);

  @media screen and (${breakpoints.small}) {
    grid-template-columns: 1fr 2fr 2fr;
  }
`;

const StyledInfoDiv = styled.div<{ cleanupInstructions?: boolean }>`
  margin-bottom: 4em;
  margin-right: 4em;
  ${props => props.cleanupInstructions && `grid-column: 2 / -1;`}

  h3 {
    border-bottom: 1px solid ${colors.white};
    font-size: 1.5em;
    margin-bottom: 1em;
    padding-bottom: 0.25em;
    max-width: max-content;
  }
`;

const StyledInfoButton = styled.a`
  background-color: #282b52;
  border: 1px solid ${colors.white};
  border-radius: 0.25em;
  color: white;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  min-width: 150px;
  outline: none;
  overflow: hidden;
  padding: 1em 1em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 0.4s ease-in-out;
  z-index: 1;

  ::before {
    background-color: ${colors.primary};
    border-radius: 50%;
    content: '';
    height: 1em;
    left: 50%;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-in-out;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transform-origin: center;
    width: 1em;
    z-index: -1;
  }

  :hover {
    border: 1px solid ${colors.primary};
    cursor: pointer;
  }

  :hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
`;

const StyledCleanupInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${breakpoints.small}) {
    flex-direction: row;
  }

  table {
    margin-bottom: 1.5em;
    margin-right: 6em;

    @media screen and (${breakpoints.small}) {
      margin-bottom: 0;
    }
  }

  ul {
    padding-left: 1.25em;

    li {
      list-style: initial;
      margin-bottom: 0.5em;
    }
  }
`;

export default MembersContent;

import styled from 'styled-components/macro';

const StyledTrackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  letter-spacing: .03rem;
  max-width: var(--site-max-width);
  
  .track__item {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 4rem;
    padding: var(--spacing-xs);
    color: var(--grey-light);
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    max-width: 100vw;

    @media (min-width: 500px) {
        grid-template-columns: 2rem minmax(min-content, 20rem) repeat(3, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (min-width: 750px) {
        grid-template-columns: 2rem minmax(min-content, 30rem) repeat(4, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (min-width: 850px) {
        grid-template-columns: 2rem minmax(min-content, 30rem) repeat(5, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (min-width: 950px) {
        grid-template-columns: 2rem minmax(min-content, 30rem) repeat(6, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (min-width: 1050px) {
        grid-template-columns: 2rem minmax(min-content, 30rem) repeat(7, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (min-width: 1160px) {
        grid-template-columns: 2rem minmax(min-content, 30rem) repeat(8, minmax(min-content, 1fr));
          padding: var(--spacing-xs) var(--spacing-sm);
    }

    &:hover,
    &:focus {
      background-color: var(--grey-dark);
    }

    /* &__selected:not(:first-child):not(div.track__item__title-group) { */
    &__selected {
      @media (max-width: 500px) {

        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        
        
        .track__item__title-group {
          grid-column-start: 1;
          grid-column-end: 3;
        }
        
      }

      @media (min-width: 500px) {
        .track__item__num__show-attribute::before {
          content: '';
          height: 0;
        }
      }
    }
  }





  .track__item__num {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fz-xs);
    font-variant-numeric: tabular-nums;
    overflow: visible;
    position: relative;

    sub {
        translate: .3rem .3rem;
    }
    
    &__show-attribute {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    font-size: var(--fz-xs);
    font-variant-numeric: tabular-nums;
    overflow: visible;
    position: relative;
  }

  &__show-attribute::before {
    content: attr(attr);
    position: absolute;
    left: 50%;
    top: 0;
    translate: -50%;
    text-align: center;
    font-size: var(--fz-xxs);
    color: rgba(255,255,255,.8);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 300;
    border-bottom: 1px solid var(--grey-medium);
    }
        
    @media (max-width: 500px) {
        display: none;
      }
  }

  .track__item__title-group {
    display: flex;
    align-items: center;
  }

  .track__item__img {
    margin-right: var(--spacing-sm);
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    background-color: var(--grey-dark);
  }

  .track__item__name {
    color: var(--white);
    font-size: var(--fz-md);
  }

  .track__item__name-artist {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .track__item__menu {
    display: none;

    @media (max-width: 500px) {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: transparent;
      padding: 0;

      div {
        translate: 0 -50%;
      }

      div,
      div::before,
      div::after {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background-color: var(--grey-light);
      }
      div::before {
        content: '';
        display: block;
        translate: 12px 0;
      }

      div::after {
        content: '';
        display: block;
        translate: -12px -.8rem;
      }
    }

  }




  .track__header {
    display: none;
    position: static;

    @media (min-width: 500px) {
      display: grid;
      border-bottom: 1px solid var(--grey-medium);
      position: -webkit-sticky;
      position: sticky;
      backdrop-filter: blur(10px);
      z-index: 20;
      top: 0;
    }
  }
  .track__header:hover {
    background-color: inherit;
  }

  .track__header__item {
    display: none;

    @media (min-width: 500px) {
      cursor: pointer;
      font-weight: 400;
      letter-spacing: .075rem;
      translate: 0 5px;
      display: flex;
      justify-content: center;
      font-size: 1.2rem;

      &:hover {
        color: var(--white);
      }
    }
  }




  .track__item__added__date {
    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 750px) {
      display: flex;
      white-space: nowrap;
    }
  }

  .track__item__valence {
    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 850px) {
      display: flex;
      white-space: nowrap;
    }
  }

  .track__item__speechiness {
    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 950px) {
      display: flex;
      white-space: nowrap;
    }
  }

  .track__item__popularity {
    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 1050px) {
      display: flex;
      white-space: nowrap;
    }
  }

  .track__item__explicit {
    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 1160px) {
      display: flex;
      white-space: nowrap;
    }
  }
`;

export default StyledTrackList;
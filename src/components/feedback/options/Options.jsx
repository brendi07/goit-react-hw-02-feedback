import {OptionsContainer, OptionsButton} from '../options/Options.styled'

const Options = ({ options, onLeaveFeedback }) => (
  <OptionsContainer>
    {Object.keys(options).map(el => (
      <OptionsButton onClick={() => onLeaveFeedback(el)} key={el}>
        {el}
      </OptionsButton>
    ))}
  </OptionsContainer>
);

export default Options
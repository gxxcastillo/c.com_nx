import { render } from '@testing-library/react';

import Meter from './Meter';

describe('Meter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meter />);
    expect(baseElement).toBeTruthy();
  });
});

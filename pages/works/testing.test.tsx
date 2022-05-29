import { fireEvent, render, screen } from '@testing-library/react';
import Testing from './testing';
describe('Testing', () => {
  it('should render the first name', () => {
    const component = shallow(<Testing data={{ firstName: '' }} />);
    const input = component.find('input').first();
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('firstName');
  });
  it('adds numbers', () => {

});

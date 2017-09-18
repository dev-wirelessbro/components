import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Tabs from '../Tabs'


it('should match its snapshot without props', () => {
    const tree = renderer
    .create(<Tabs/>)
    .toJSON()
    expect(tree).toMatchSnapshot()
})

it('should match its snapshot with selectedKey only', () => {
    const tree = renderer
    .create(
        <Tabs activeKey='tab2'>
            <Tabs.TabPane key='tab2' tab='tab2'>
                tab2 content
            </Tabs.TabPane>
        </Tabs>
    )
    .toJSON()
    expect(tree).toMatchSnapshot()
})

it('should call onchange function', () => {
    // render the initial tabs
    const onChangeMock = jest.fn()
    let component = shallow(
        <Tabs activeKey='tab1' onChange={onChangeMock}>
            <Tabs.TabPane key='tab1' tab='tab1'>
                tab1 content
            </Tabs.TabPane>
            <Tabs.TabPane key='tab2' tab='tab2'>
                tab2 content
            </Tabs.TabPane>
        </Tabs>
    )
    // Find the second tab which is not selected
    const li = component.find('span').not('.active').parent().simulate('click')
    //
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('tab2');
})

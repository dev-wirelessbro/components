class TabComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {activeKey: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(key) {
        console.log('TabComponent', key)
        this.setState({
            activeKey: key
        })
    }

    render() {

        return (
            <Tabs defaultActiveKey="tab1" activeKey={this.state.activeKey} onChange={this.handleChange}>
                <TabPane key='tab1' tab='tab1'>
                    <TabContent>tab1 content</TabContent>
                </TabPane>
                <TabPane key='tab2' tab='tab2'>
                    <TabContent>tab2 content</TabContent>
                </TabPane>
            </Tabs>
        )
    }
}



ReactDOM.render(
    <TabComponent />,
    document.getElementById('root')
);

import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';

import Modal from "../components/Modal";

const MainPanel = kind({
	
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Sangjjangwook" />
			<Button>Click me</Button>
			<Modal></Modal>
		</Panel>
	)
});

export default MainPanel;

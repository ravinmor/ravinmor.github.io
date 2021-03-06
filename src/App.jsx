import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { PreLoader } from "./components/preLoader";
import FontStyles from "./components/globalStyles";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {    
	const [ removePreloader, setRemovePreloader ] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setRemovePreloader(true)
		}, 10000);
	}, [removePreloader])
	
    return (
		<>
			{!removePreloader && <PreLoader />}
			<FontStyles />
			<CanvasContainer>
				<TopSection />
				<Canvas>
					<Suspense fallback={null}>
						<Earth />
					</Suspense>
				</Canvas>
			</CanvasContainer>
		</>
  );
}

export default App;

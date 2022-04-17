import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useEffect, useState } from "react/cjs/react.development";

import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { PreLoader } from "./components/preLoader";

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

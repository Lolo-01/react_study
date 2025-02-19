import { useNavigate } from 'react-router-dom';

export default function Choose() {
    const movePage = useNavigate();

    const handleNavigation = (path) => {
        movePage(path);
    };

    return (
        <div>
            <div style={{
                display: 'flex', // 가로 정렬
                gap: '20px',     // 각 요소 사이 여백 추가
                justifyContent: 'start'
            }}>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div1')}>div1</h3>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div2')}>div2</h3>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div3')}>div3</h3>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div4')}>div4</h3>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div5')}>div5</h3>
                <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigation('/div6')}>div6</h3>
            </div>


            <h3
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavigation('/calc')}
            >
                계산기
            </h3>


            <h3
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavigation('/dark')}
            >
                다크모드
            </h3>

            <h3
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavigation('/stu')}
            >
                student
            </h3>


            <div style={{
                display: 'flex', // 가로 정렬
                gap: '20px',     // 각 요소 사이 여백 추가
                justifyContent: 'start'
            }}>
                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigation('/axios')}
                >
                    axios
                </h3>
                <h3
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigation('/axios2')}
                >
                    axios2
                </h3>
            </div>
        </div>
    );
}

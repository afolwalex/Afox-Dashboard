import {TabStyle} from '../styles/basic.styles';

interface Option {
    id: number | string;
    name: string;
}

const Tab = ({
    tabs,
    active,
    setActive,
    width,
}: {
    tabs: Option[];
    active: number | string;
    setActive: (arg: any) => void;
    width?: string;
}) => {
    return (
        <TabStyle width={width}>
            {tabs.map(t => (
                <button
                    key={t.id}
                    className={t.id === active ? 'active' : ''}
                    onClick={() => setActive(t.id)}>
                    {t.name}
                </button>
            ))}
        </TabStyle>
    );
};

export default Tab;

import { upperFirst } from 'lodash';
import React, { memo, ReactNode, useEffect } from 'react';

import { useSetting } from 'contexts/SettingProvider';

interface RootProps {
    children?: ReactNode;
}

const Root = (props: RootProps) => {
    const { t } = useSetting();

    return (
        <>
            {props?.children}
        </>
    );
};



export default (memo(Root));

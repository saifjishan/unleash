import { FC } from 'react';
import StandaloneBanner from 'component/user/StandaloneBanner';
import { styled } from '@mui/material';

interface IStandaloneLayout {
    BannerComponent?: JSX.Element;
    showMenu?: boolean;
}

const StyledContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(11),
    background: theme.palette.standaloneBackground,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0',
    },
    minHeight: '100vh',
}));

const StyledHeader = styled('header')(({ theme }) => ({
    width: '40%',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('md')]: {
        borderRadius: '0',
        width: '100%',
        minHeight: 'auto',
    },
}));

const StyledMain = styled('main')(({ theme }) => ({
    width: '60%',
    flex: '1',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        borderRadius: '0',
        width: '100%',
        position: 'static',
        minHeight: 'auto',
    },
}));

const StyledInnerRightContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(12, 6),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 4),
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 2),
    },
}));

const StandaloneLayout: FC<IStandaloneLayout> = ({
    children,
    BannerComponent,
}) => {
    let banner = <StandaloneBanner title="Unleash" />;

    if (BannerComponent) {
        banner = BannerComponent;
    }

    return (
        <StyledContainer>
            <StyledHeader>{banner}</StyledHeader>
            <StyledMain>
                <StyledInnerRightContainer>
                    {children}
                </StyledInnerRightContainer>
            </StyledMain>
        </StyledContainer>
    );
};

export default StandaloneLayout;

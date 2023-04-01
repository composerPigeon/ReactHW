import {Button, Navbar as RNav, Label} from 'reactstrap';


function NavBar({page, setPage}) {
    return (
        <RNav container='sm' color='secondary'>
            <MyButton
                label="Prev"
                onClickFunc={() => setPage(page - 1)}
                disabled={page !== 1 ? false : true}
            />
            <Label size='large'>Page: {page}</Label>
            <MyButton
                label="Next"
                onClickFunc={() => setPage(page + 1)}
                disabled={page !==  3 ? false : true}
            />
        </RNav>
    );
}

function MyButton({label, onClickFunc, disabled=false}) {
    return (
        <Button onClick={onClickFunc} disabled={disabled}>
            {label}
        </Button>
    );
}

export {MyButton, NavBar}
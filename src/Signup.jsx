export default function Signup({pageChange, login}) {
    pageChange('Signup');
    return (
        <>
            <h1 className="text-[rgb(77,126,212)]">{login}</h1>
        </>
    );
}
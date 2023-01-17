marked.setOptions({
    breaks: true
});
const renderer = new marked.Renderer();

function App()
{
    const [text, settext] = React.useState("");
    const Colors =  
    [
        "#16A085",
        "#27AE60",
        "#2C3E50",
        "#9B59B6",
        "#E74C3C",
        "#77B1A9"
    ];
    let randomCOLOR = Math.floor(Math.random() * Colors.length); // sect position of array Colors
    //______________inport file
    React.useEffect( () =>
    {
        async function fetchData()
        {
            const respose = await fetch('./example.txt'); {/* extrac data url*/}
            const data = await respose.text(); {/* to string data*/}
            settext(data);
        }
        fetchData();
    }, []);
    //__________inport file end

    return (
        <div style = {{backgroundColor: Colors[randomCOLOR], minHeight: "100vh"}}>
            <div className = 'container pt-5'>
                <div id = 'base' className = "text-center card">
                    <h1>Markdown Previewer</h1>
                    <textarea name = 'text' id = 'text' row = '30' value = {text} onChange = {(e) => settext(e.target.value)} className = 'textarea'>
                    </textarea>

                    <h3 className = 'mt-3'>Output</h3>
                    <div className = 'card'>
                        <Preview markdown = {text} />{/* call the metho preview */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Preview({ markdown })
{
    //show the value of textarea whit Markdown
    return <div id = 'preview' dangerouslySetInnerHTML = {{ __html: marked( markdown, { renderer: renderer } )}} ></div>;
}

ReactDOM.render(<App />, document.getElementById("root"));

function Page () {
    return (
        <div className="page-banner" style={{ backgroundImage: "url(/ocean.png)" }}>
            <div className="page-banner-image"></div>
            <div className="page-banner-content container">
                <h1 className="headline-large">Welcome!</h1>
                <h2 className="headline-medium">We think you&rsquo;ll like it here.</h2>
                <h3 className="headline-small">Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h3>
                <a href="#" className="click-btn">Find Your Major</a>
            </div>
        </div>
    )
}

export default Page;
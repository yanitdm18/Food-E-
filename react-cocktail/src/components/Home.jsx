export default function Home (){
    return (
        <div className="body-home">
            <img src="https://in.thebar.com/PR1670/public/2023-05/Artistic%20Cocktails%20cover.webp?VersionId=bnEA8aRuxTXiThjLyakHNWryY7ZS8efJ"/>
            <div className="body-text">
                <div>Powered by the Cocktail DB, the Drink List is a recipe database with over 100 cocktail recipes. Featuring everything from Moscow Mules to Singapore Slings, whiskey to tequila, taking it neat or done up with mixers and an umbrella, the Drink List has exactly what you're craving.</div>
                <div className="body-spacer"></div>
                <div>Whether it’s a special occasion, you want to expand your mixology repertoire, or you’re finally treating yourself, the Drink List has exactly what you need to make the perfect cocktail!</div>
            </div>
            <img src="https://cf.ltkcdn.net/cocktails/images/std/278868-800x533-popular-cocktail-recipes.webp"/>
            <div className="body-suggested">
                <div className="body-text">Try a sip of the drink we're obsessed with right now:</div>
                <div className="body-suggested-grid">
                    <div className="body-suggested-card">
                        <img src="https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg" alt="French 75"/>
                        <div className="body-suggested-name">French 75</div>
                        <button className="body-suggested-button">explore</button>
                    </div>
                    <div className="body-suggested-card">
                        <img src="https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg" alt="Moscow Mule"/>
                        <div className="body-suggested-name">Moscow Mule</div>
                        <button className="body-suggested-button">explore</button>
                    </div>
                    <div className="body-suggested-card">
                        <img src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg" alt="Mojito"/>
                        <div className="body-suggested-name">Mojito</div>
                        <button className="body-suggested-button">explore</button>
                    </div>
                </div>
            </div>
            <img src="https://blog.saucey.com/wp-content/uploads/2020/12/pexels-chris-f-1283219-scaled.jpg"/>
            <div className="body-suprise">
                <div className="body-text">If you're looking for something new, try a random recipe suggestion from our virtual bartender.</div>
                <button className="body-surprise-button">surprise me!</button>
            </div>
        </div>
        
    )
}
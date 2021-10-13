import React from 'react';

const BakePage = (props) => {
  return (
    <div className='BakePageWrap'>
        <h1 className='BakePageHeader'>Time to begin!</h1>
        <div className='recipeWrap'>
          <ol className='recipe'>
            <li className='stepOne'>Make the dough: In a large bowl, combine 200 grams of leaven with 750 grams of warm water and stir to disperse.</li>
            <label name='stepOnecheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <li className='stepTwo'>Add 900 grams of white-bread flour and 100 grams of whole-wheat flour to bowl and use your hands to mix until no traces of dry flour remain. The dough will be sticky and ragged. Cover bowl with a towel and let dough rest for 30 minutes at room temperature.</li>
            <div className='stepTwoInputWrapper'>
            <label name='stepTwoCheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <label name='stepTwoInput'>Notes:
              <textarea />
            </label>
            </div>
            <li className='stepThree'>Add 20 grams fine sea salt and 50 grams warm water. Use hands to integrate salt and water into dough thoroughly. The dough will begin to pull apart, but continue mixing; it will come back together.</li>
            <label name='stepThreeCheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <li className='stepFour'>Cover dough with a towel and transfer to a warm environment, 75 to 80 degrees ideally (like near a window in a sunny room, or inside a turned-off oven with small pot of boiled water). Let dough rise for 30 minutes. Fold dough by dipping hand in water, taking hold of the underside of the dough at one quadrant and stretching it up over the rest of the dough. Repeat this action 3 more times, rotating bowl a quarter turn for each fold. Do this every half-hour for 3 hours. The dough should be billowy and increase in volume 20 to 30 percent. If not, continue to let rise and fold for up to an hour more.</li>
            <label name='stepFourCheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <label name='stepFourInput'>Notes:
              <textarea />
            </label>
            <li className='stepFive'>Transfer dough to a work surface and dust top with flour. Use a dough scraper to cut dough into 2 equal pieces and flip them over so floured sides are face down. Fold the cut side of each piece up onto itself so the flour on the surface remains entirely on the outside of the loaf; this will become the crust. Work dough into taut rounds. Place the dough rounds on a work surface, cover with a towel if drafty, and let rest 30 minutes.</li>
            <label name='stepFivecheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <label name='stepFiveInput'>Notes:
              <textarea />
            </label>
            <li className='stepSix'>Line two bread-proofing baskets with baking paper. </li>
            <label name='stepSixcheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <li className='stepSeven'>Use a dough scraper to flip them over onto a work surface so floured sides are facing down. Take one round, and starting at the side closest to you, pull the bottom 2 corners of the dough down toward you, then fold them up into the middle third of the dough. Repeat this action on the right and left sides, pulling the edges out and folding them in over the center. Finally, lift the top corners up and fold down over previous folds. (Imagine folding a piece of paper in on itself from all 4 sides.) Roll dough over so the folded side becomes the bottom of the loaf. Shape into a smooth, taut ball. Repeat with other round.</li>
            <label name='stepSevencheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <li className='stepEight'>Transfer rounds, seam-side down, to proofing baskets lined with baking paper. Return dough to the 75- to 80-degree environment for 3 to 4 hours. (Or let dough rise for 10 to 12 hours in the refrigerator. Bring back to room temperature before baking.)</li>
            <label name='stepEightcheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <label name='stepEightInput'>Notes:
              <textarea />
            </label>
            <li className='stepNine'>Place a Dutch oven or lidded cast-iron pot in the oven and heat it to 500 degrees. Very carefully remove heated pot from oven and place baking paper and dough into pot, as it was in proofing basket. Use a razor blade to score the top of the bread a few times to allow for expansion, cover and transfer to oven. Reduce temperature to 450 degrees and cook for 30 minutes. Carefully remove lid (steam may release) and cook for 20 more minutes or until crust is a rich, golden brown color.</li>
            <label name='stepNinecheckbox'>Complete:
              <input type='checkbox'/>
            </label>
            <label name='stepNineInput'>Notes:
              <textarea />
            </label>
            <li className='stepTen'>Transfer bread out of pot to cool for at least 15 minutes before slicing. The bottom of the loaf should sound hollow when tapped. Increase oven temperature to 500 degrees, clean out pot and repeat this process with the second loaf.</li>
            <label name='stepTencheckbox'>Complete:
              <input type='checkbox'/>
            </label>
          </ol>
          <label name='finalNotesInput'>Notes:
              <textarea />
          </label>
          <button className='bakeFormSubmit'>Bread been made</button>
        </div>

    </div>
  )
}

export default BakePage;
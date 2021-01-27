export default function ParamDisplay(props) {
  return (
    <section id="sectionOne">
      <h1>Random Color Generator</h1>

      <div className="group">
        {/* User input for Hue */}
        <div className="box">
          <label htmlFor="hue">Hue in degrees</label>
          <input
            id="hue"
            type="range"
            min="0"
            max="360"
            value={props.hue}
            onChange={({ target }) => props.setHue(target.value)}
          />
          <input
            type="number"
            min="0"
            max="360"
            value={props.hue}
            onChange={({ target }) => props.setHue(target.value)}
          />
        </div>

        {/* User input for Saturation */}
        <div className="box">
          <label htmlFor="saturation">Saturation in percent</label>
          <input
            id="saturation"
            type="range"
            min="0"
            max="100"
            value={props.saturation}
            onChange={({ target }) => props.setSaturation(target.value)}
          />
          <input
            type="number"
            min="0"
            max="100"
            value={props.saturation}
            onChange={({ target }) => props.setSaturation(target.value)}
          />
        </div>

        {/* User input for Lightness */}
        <div className="box">
          <label htmlFor="lightness">Lightness in percent</label>
          <input
            id="lightness"
            type="range"
            min="0"
            max="100"
            value={props.lightness}
            onChange={({ target }) => props.setLightness(target.value)}
          />
          <input
            type="number"
            min="0"
            max="100"
            value={props.lightness}
            onChange={({ target }) => props.setLightness(target.value)}
          />
        </div>
      </div>
      <div className="group">
        {/* User input for Width */}
        <div className="box">
          <label htmlFor="width">Box-Width in pixels</label>
          <input
            id="width"
            type="number"
            min="0"
            max="1000"
            defaultValue={props.width}
            onChange={({ target }) => props.setWidth(target.value)}
          />
          <p>(maximum 1000px)</p>
        </div>

        {/* User input for height */}
        <div className="box">
          <label htmlFor="height">Box-Height in pixels</label>
          <input
            id="height"
            type="number"
            min="0"
            max="500"
            defaultValue={props.height}
            onChange={({ target }) => props.setHeight(target.value)}
          />
          <p>(maximum 500px)</p>
        </div>
      </div>

      {/* Button for generating a random color */}
      <button
        onClick={() => {
          props.setHue(Math.floor(Math.random() * 360));
          props.setSaturation(Math.floor(Math.random() * 100));
          props.setLightness(Math.floor(Math.random() * 100));
        }}
      >
        Random Color
      </button>
    </section>
  );
}

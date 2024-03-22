import Image from "next/image";
import Button from "./Button";

function GetApp() {
  return (
    <section>
      <div>
        <div>
          <h2>Get for free now!</h2>
          <p>Available on iOS and Android</p>
          <div>
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div>
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;

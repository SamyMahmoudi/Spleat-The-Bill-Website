import QrcodeSection from '../Features/QrcodeSection/index';
import SelectSection from '../Features/SelectSection/index';
import SplitSection from '../Features/SplitSection/index';

import './../../sass/components/_SectionFeature.scss';

const index = () => {
    return (
      <section className="FeatureSection">
          <QrcodeSection/>
          <SelectSection/>
          <SplitSection/>
      </section>
    );
};

export default index;


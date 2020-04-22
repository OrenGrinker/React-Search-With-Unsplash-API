import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
         'Client-ID bi8iJ_gS86Lup_MhehJTB0JAXk2WnE2ewTGTqkFjKpQ'
      }
});

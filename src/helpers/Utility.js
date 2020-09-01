require("dotenv").config();

class Utility {
  constructor() {
    this.STATUS_ERROR = false;
    this.STATUS_SUCCESS = true;
  }

  async sendRequest(args) {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    
    var data, url, type;

    url = args.url;
    if (url.slice(0, 1) === "/") {
      url = url.slice(1);
    }

    if (args.data) {
      data = args.data;
    } else {
      data = {};
    }

    if (!args.data.url) {
      data["url"] = window.location.host;
    }

    type = args.type ? args.type : "get";

    const response = await fetch(baseUrl + "/" + url, {
      method: type,
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).catch(function (error) {
      console.log(error);
      alert("Something went wrong while fetching data. Please try again.");
    });
    console.log("Response in App",response)
    const responseJSON = await response.json();

    return responseJSON;
  }

  getMediaLinks = (productLink) => {
    let isMobile = window.outerWidth <= 1024;
    let productURL = encodeURIComponent(window.location.origin + productLink);
    let sellerContactNumber = localStorage.getItem("seller_contact_number");

    let whatsappShareLinkShop = isMobile
      ? `whatsapp://send?phone=${sellerContactNumber}&text=Hey I like your shop`
      : `https://wa.me/${sellerContactNumber}?text=Hey I like your shop`;

    let shareLinkShop = isMobile
      ? "whatsapp://send?text=Hey! Check this shop"
      : `https://wa.me?text=Hey! Check this shop`;

    let whatsappShareLink = isMobile
      ? `whatsapp://send?phone=${sellerContactNumber}&text=` + productURL
      : `https://wa.me/${sellerContactNumber}?text=` + productURL;

    let shareLink = isMobile
      ? "whatsapp://send?text=" + productURL
      : `https://wa.me?text=` + productURL;

    return {
      whatsappShareLinkShop,
      shareLinkShop,
      whatsappShareLink,
      shareLink,
    };
  };
}

export default new Utility();

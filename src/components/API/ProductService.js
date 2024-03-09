import axios from "axios";
import { getStringXAuth } from "../../utils/xAuth";

export default class ProductService {
  static async getIds(offset = 0, limit = 5) {
    const response = await axios.post(
      "https://api.valantis.store:41000/",
      {
        action: "get_ids",
        params: {
          offset: offset,
          limit: limit,
        },
      },
      {
        headers: {
          "X-Auth": getStringXAuth(),
        },
      }
    );
    return response;
  }

  static async getItems(ids) {
    const response = await axios.post(
      "https://api.valantis.store:41000/",
      {
        action: "get_items",
        params: {
          ids: ids,
        },
      },
      {
        headers: {
          "X-Auth": getStringXAuth(),
        },
      }
    );
    return response;
  }

  static async getAllFields() {
    const response = await axios.post(
      "https://api.valantis.store:41000/",
      {
        action: "get_fields",
      },
      {
        headers: {
          "X-Auth": getStringXAuth(),
        },
      }
    );
    return response;
  }

  static async getFields(field, offset = 0, limit = 5) {
    const response = await axios.post(
      "https://api.valantis.store:41000/",
      {
        action: "get_fields",
        params: {
          field: field,
          offset: offset,
          limit: limit,
        },
      },
      {
        headers: {
          "X-Auth": getStringXAuth(),
        },
      }
    );
    return response;
  }
}

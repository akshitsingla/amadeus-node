/**
 * A namespaced client for the
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */
class Seatmaps {
  constructor(client) {
    this.client = client;
  }

  /**
   * To list the seat map of every flight in a flight Order
   *
   * @param {Object} params
   * @param {string} params.flight-orderId identifier of the order
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To list the seat map of every flight in
   * the flight Order with ID eJzTd9cPDPMwcooAAAtXAmE
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *   'flight-orderId': 'eJzTd9cPDPMwcooAAAtXAmE'
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/seatmaps', params);
  }
}

export default Seatmaps;

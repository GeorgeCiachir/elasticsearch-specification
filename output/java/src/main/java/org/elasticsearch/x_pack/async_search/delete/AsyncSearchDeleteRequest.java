
package org.elasticsearch.x_pack.async_search.delete;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class AsyncSearchDeleteRequest  implements XContentable<AsyncSearchDeleteRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public AsyncSearchDeleteRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchDeleteRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchDeleteRequest, Void> PARSER =
    new ObjectParser<>(AsyncSearchDeleteRequest.class.getName(), false, AsyncSearchDeleteRequest::new);

  static {
    
  }

}
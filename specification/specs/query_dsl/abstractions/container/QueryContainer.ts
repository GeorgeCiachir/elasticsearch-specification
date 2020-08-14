@class_serializer("QueryContainerInterfaceFormatter")
class QueryContainer {
	bool: BoolQuery;
	boosting: BoostingQuery;
	common: SingleKeyDictionary<Union<CommonTermsQuery, string>>;
	constant_score: ConstantScoreQuery;
	dis_max: DisMaxQuery;
	distance_feature: SingleKeyDictionary<Union<DistanceFeatureQuery, string>>;
	exists: ExistsQuery;
	function_score: FunctionScoreQuery;
	fuzzy: SingleKeyDictionary<Union<FuzzyQuery, string>>;
	geo_bounding_box: SingleKeyDictionary<Union<GeoBoundingBoxQuery, string>>;
	geo_distance: SingleKeyDictionary<Union<GeoDistanceQuery, string>>;
	geo_polygon: SingleKeyDictionary<Union<GeoPolygonQuery, string>>;
	geo_shape: SingleKeyDictionary<Union<GeoShapeQuery, string>>;
	has_child: HasChildQuery;
	has_parent: HasParentQuery;
	ids: IdsQuery;
	intervals: SingleKeyDictionary<Union<IntervalsQuery, string>>;
	is_conditionless: boolean;
	is_strict: boolean;
	is_verbatim: boolean;
	is_writable: boolean;
	match: SingleKeyDictionary<MatchQuery | string>; // { key: MatchQuery | string }
	match_all: MatchAllQuery;
	match_bool_prefix: SingleKeyDictionary<Union<MatchBoolPrefixQuery, string>>;
	match_none: MatchNoneQuery;
	match_phrase: SingleKeyDictionary<Union<MatchPhraseQuery, string>>;
	match_phrase_prefix: SingleKeyDictionary<Union<MatchPhrasePrefixQuery, string>>;
	more_like_this: MoreLikeThisQuery;
	multi_match: MultiMatchQuery;
	nested: NestedQuery;
	parent_id: ParentIdQuery;
	percolate: PercolateQuery;
	pinned: PinnedQuery;
	prefix: SingleKeyDictionary<Union<PrefixQuery, string>>;
	query_string: QueryStringQuery;
	range: RangeQuery;
	rank_feature: SingleKeyDictionary<Union<RankFeatureQuery, string>>;
	raw_query: RawQuery;
	regexp: SingleKeyDictionary<Union<RegexpQuery, string>>;
	script: ScriptQuery;
	script_score: ScriptScoreQuery;
	shape: SingleKeyDictionary<Union<ShapeQuery, string>>;
	simple_query_string: SimpleQueryStringQuery;
	span_containing: SpanContainingQuery;
	field_masking_span: SpanFieldMaskingQuery;
	span_first: SpanFirstQuery;
	span_multi: SpanMultiTermQuery;
	span_near: SpanNearQuery;
	span_not: SpanNotQuery;
	span_or: SpanOrQuery;
	span_term: SingleKeyDictionary<Union<SpanTermQuery, string>>;
	span_within: SpanWithinQuery;
	term: SingleKeyDictionary<Union<TermQuery, string>>;
	terms: SingleKeyDictionary<Union<TermsQuery, string>>;
	terms_set: SingleKeyDictionary<Union<TermsSetQuery, string>>;
	wildcard: SingleKeyDictionary<Union<WildcardQuery, string>>;
}

const IRS_STRUCTURE = [
    {
        "object": "package",
        "name": "Interface Requirements Specification",
        "contents": [
            {
                "object": "package",
                "name": "Front Matter",
                "contents": [
                    {
                        "object": "package",
                        "name": "Cover",
                        "instructions": [
                            "The document shall include a title page containing, as applicable: document number; volume number; version/revision indicator; security markings or other restrictions on the handling of the document; date; document title; name, abbreviation, and any other identifier for the system, subsystem, or item to which the document applies; contract number; CDRL item number; organization for which the document has been prepared; name and address of the preparing organization; and distribution statement."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Revision Summary"
                    },
                    {
                        "object": "package",
                        "name": "Table of Contents",
                        "instructions":[
                            "The document shall contain a table of contents providing the number, title, and page number of each titled paragraph, figure, table, and appendix."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Scope",
                "instructions": [
                    "This section shall be divided into the following paragraphs:"
                ],
                "text": [
                    "The IRS specifies the requirements imposed on one or more systems, subsystems, HWCIs, CSCIs, manual operations or other system components to achieve one or more interfaces among these entities and the methods to be used to ensure that each requirement has been met.",
                    "This section identifies the systems, subsystems, HWCIs, CSCIs, manual operations or other system components that this specification applies to, describes these entities and provides an overview of the document."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Identification",
                        "instructions": [
                            "This paragraph shall contain a full identification of the systems, subsystems, HWCIs, CSCIs, manual operations or other system components to which this document applies, including, as applicable, identification number(s), title(s), abbreviation(s), version number(s), and release number(s)."
                        ],
                        "text": [
                            "This specification applies to the XXXXXXXXXX."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "System Overview",
                        "instructions": [
                            "This paragraph shall briefly state the purpose of the systems, subsystems, HWCIs, CSCIs, manual operations or other system components to which this document applies. It shall describe the general nature of these entities; summarize the history of system development, operation, and maintenance; identify the project sponsor, acquirer, user, developer, and support agencies; identify current and planned operating sites; and list other relevant documents."
                        ],
                        "text": [
                            "The XXXXXXXXX is..."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Document Overview",
                        "instructions": [
                            "This paragraph shall summarize the purpose and contents of this document and shall describe any security or privacy considerations associated with its use."
                        ],
                        "text": [
                            "The structure of this document is based on DID DI-IPSC-81434A, \"Interface Requirements Specification\", dated December 15, 1999. The document structure may deviate from the DID to facilitate publishing the document from the contents of a UML/SysML database.",
                            "This document is organized as follows:",
                            "Section 1. Scope: Identifies the scope of this document.",
                            "Section 2. Referenced Documents: Identifies all documents that are referenced in this document.",
                            "Section 3. Requirements: Lists interface requirements.",
                            "Section 4. Qualification Provisions: Lists each interface requirement and identifies the methods to be used to ensure the requirement has been met.",
                            "Section 5. Requirements Traceability: Provides traceability of the interface requirements listed in this document to higher level requirements documents or standards.",
                            "Section 6. Notes: Contains a listing of acronyms and terms used in this document and their definition."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Referenced Documents",
                "instructions":[
                    "This section shall list the number, title, revision, and date of all documents referenced in this document. This section shall also identify the source for all documents not available through normal Government stocking activities."
                ],
                "text": [
                    "This section lists all documents referenced in this document."
                ]
            },
            {
                "object": "package",
                "name": "Requirements",
                "instructions": [
                    "This section shall be divided into the following paragraphs to specify the requirements imposed on one or more systems, subsystems, HWCIs, CSCIs, manual operations or other system components to achieve one or more interfaces among these entities. Each requirement shall be assigned a project-unique identifier to support testing and traceability and shall be stated in such a way that an objective test can be defined for it. Each requirement shall be annotated with associated qualification method(s) (see section 4) and traceability to system (or subsystem, if applicable) requirements (see section 5.a), if not provided in those sections. The degree of detail to be provided shall be guided by the following rule: Include those characteristics of the interfacing entities that are conditions for their acceptance; defer to design descriptions those characteristics that the acquirer is willing to leave up to the developer. If a given requirement fits into more than one paragraph, it may be stated once and referenced from the other paragraphs. If an interfacing entity included in this specification will operate in states and/or modes having interface requirements different from other states and modes, each requirement or group of requirements for that entity shall be correlated to the states and modes. The correlation may be indicated by a table or other method in this paragraph, in an appendix referenced from this paragraph or by annotation of the requirements in the paragraphs where they appear."
                ],
                "text":[
                    "This section identifies interface requirements for the specified systems, subsystems, HWCIs, CSCIs, manual operations or other system components which are conditions for its acceptance. Each requirement consists of a title, a \"shall statement\", a unique identifier, and the requirement's priority."
                ],
                "contents": [
                    {
                        "object": "package",
                        "name": "Interface Identification and Diagrams",
                        "instructions": [
                            "For each interface identified in 1.1, this paragraph shall include a project­ unique identifier and shall designate the interfacing entities (systems, configuration items, users, etc.) by name, number, version, and documentation references, as applicable. The identification shall state which entities have fixed interface characteristics (and therefore impose interface requirements on interfacing entities) and which are being developed or modified (thus having interface requirements imposed on them). One or more interface diagrams shall be provided to depict the interfaces."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "External Interfaces",
                        "instructions": [
                            "This paragraph shall identify a system external interface by project-unique identifier, shall briefly identify the interfacing entities, and shall be divided into subparagraphs as needed to state the requirements imposed on one or more of the interfacing entities to achieve the interface. If the interface characteristics of an entity are not covered by this IRS but need to be mentioned to specify the requirements for entities that are, those characteristics shall be stated as assumptions or as \"When [the entity not covered] does this, the [entity being specified] shall...\" rather than as requirements on entities not covered by this IRS. This paragraph may reference other documents (such as data diction aries, standards for communication protocols, and standards for user interfaces) in place of stating the information here. The requirements shall include the following, as applicable, presented in any order suited to the requirements, and shall note any differences in these characteristics from the point of view of the interfacing entities (such as different expectations about the size, frequency, or other characteristics of data elements):",

                            "\ta. Priority that the interfacing entity(ies) must assign the interface.",

                            "\tb. Requirements on the type of interface (such as real-time data transfer, storage-and­ retrieval of data, etc.) to be implemented.",

                            "\tc. Required characteristics of individual data elements that the interfacing entity(ies) will provide, store, send, access, receive, etc., such as:",

                            "\t\t1) Names/identifiers:",

                            "\t\t\ta) Project-unique identifier.",

                            "\t\t\tb) Non-technical (natural-language) name.",

                            "\t\t\tc) DOD standard data element name.",

                            "\t\t\td) Technical name (e.g., variable or field name in code or database).",

                            "\t\t\te) Abbreviation or synonymous names.",

                            "\t\t2) Data type (alphanumeric, integer, etc.).",

                            "\t\t3) Size and format (such as length and punctuation of a character string).",

                            "\t\t4) Units of measurement (such as meters, dollars, nanoseconds).",

                            "\t\t5) Range or enumeration of possible values (such as 0-99).",

                            "\t\t6) Accuracy (how correct) and precision (number of significant digits).",

                            "\t\t7) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the data element may be updated and whether business rules apply.",

                            "\t\t8) Security and privacy constraints.",

                            "\t\t9) Sources (setting/sending entities) and recipients (using/receiving entities).",

                            "\td. Required characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) that the system must provide, store, send, access, receive, etc., such as:",

                            "\t\t1) Names/identifiers:",

                            "\t\t\ta) Project-unique identifier.",

                            "\t\t\tb) Non-technical (natural language) name.",

                            "\t\t\tc) Technical name (e.g., record or data structure name in code or database).",

                            "\t\t\td) Abbreviations or synonymous names.",
                            
                            "\t\t2) Data elements in the assembly and their structure (number, order, grouping).",
                            
                            "\t\t3) Medium (such as disk) and structure of data elements/assemblies on the medium.",
                            
                            "\t\t4) Visual and auditory characteristics of displays and other outputs (such as colors, layouts, fonts, icons and other display elements, beeps, lights).",
                            
                            "\t\t5) Relationships among assemblies, such as sorting/access characteristics.",
                            
                            "\t\t6) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the assembly may be updated and whether business rules apply.",
                            
                            "\t\t7) Security and privacy constraints.",
                            
                            "\t\t8) Sources (setting/sending entities) and recipients (using/receiving entities).",
                            
                            "\te. Required characteristics of communication methods that the interfacing entity(ies) must use for the interface, such as:",
                            
                            "\t\t1) Project-unique identifier(s).",
                            
                            "\t\t2) Communication links/bands/frequencies/media and their characteristics.",
                            
                            "\t\t3) Message formatting.",
                            
                            "\t\t4) Flow control (such as sequence numbering and buffer allocation).",
                            
                            "\t\t5) Data transfer rate, whether periodic/aperiodic, and interval between transfers.",
                            
                            "\t\t6) Routing, addressing, and naming conventions.",
                            
                            "\t\t7) Transmission services, including priority and grade.",
                            
                            "\t\t8) Safety/security/privacy considerations, such as encryption, user authentication, compartmentalization, and auditing.",
                            
                            "\tf. Required characteristics of protocols the interfacing entity(ies) must use for the interface, such as:",
                            
                            "\t\t1) Project-unique identifier(s).",
                            
                            "\t\t2) Priority/layer of the protocol.",
                            
                            "\t\t3) Packeting, including fragmentation and reassembly, routing, and addressing.",
                            
                            "\t\t4) Legality checks, error control, and recovery procedures",
                            
                            "\t\t5) Synchronization, including connection establishment, maintenance, termination.",
                            
                            "\t\t6) Status, identification, and any other reporting features.",
                            
                            "\tg. Other required characteristics, such as physical compatibility of the interfacing entities (dimensions, tolerances, loads, plug compatibility, etc.), voltages, etc."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Precedence and Criticality of Requirements",
                        "instructions":[
                            "This paragraph shall specify, if applicable, the order of precedence, criticality, or assigned weights indicating the relative importance of the requirements in this specification. Examples include identifying those requirements deemed critical to safety, to security, or to privacy for purposes of singling them out for special treatment. If all requirements have equal weight, this paragraph shall so state."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Qualification Provisions",
                "instructions":[
                    "This section shall define a set of qualification methods and shall specify for each requirement in Section 3 the method(s) to be used to ensure that the requirement has been met. A table may be used to present this information, or each requirement in Section 3 may be annotated with the method(s) to be used. Qualification methods may include:",

                    "\ta. Demonstration: The operation of interfacing entities that relies on observable functional operation not requiring the use of instrumentation, special test equipment, or subsequent analysis.",
                    
                    "\tb. Test: The operation of operation of interfacing entities using instrumentation or other special test equipment to collect data for later analysis.",
                    
                    "\tc. Analysis: The processing of accumulated data obtained from other qualification methods. Examples are reduction interpolation, or extrapolation of test results.",
                    
                    "\td. Inspection: The visual examination of interfacing entities, documentation, etc.",
                    
                    "\te. Special qualification methods. Any special qualification methods for the interfacing entities, such as special tools, techniques, procedures, facilities, acceptance limits."
                ]
            },
            {
                "object": "package",
                "name": "Requirements Traceability",
                "instructions":[
                    "For system-level interfacing entities, this paragraph does not apply. For subsystem or lower-level interfacing entity covered by this IRS, this paragraph shall contain:",

                    "\ta. Traceability from each requirement imposed on the entity in this specification to the system (or subsystem, if applicable) requirements it addresses. (Alternatively, this traceability may be provided by annotating each requirement in Section 3.)",
                    
                    "\tNote: Each level of system refinement may result in requirements not directly traceable to higher-level requirements. For example, a system architectural design that creates multiple subsystems may result in requirements about how the subsystems will interface, even though these interfaces are not covered in system requirements. Such requirements may be traced to a general requirement such as \"system implementation\" or to the system design decisions that resulted in their generation.",
                    
                    "\tb. Traceability from each system (or subsystem, if applicable) requirement that has been allocated to the interfacing entity and that affects an interface covered in this specification to the requirements in this specification that it addresses."
                ]
            },
            {
                "object": "package",
                "name": "Notes",
                "instructions":[
                    "This section shall contain any general information that aids in understanding this document (e.g., background information, glossary, rationale). This section shall include an alphabetical listing of all acronyms, abbreviations, and their meanings as used in this document and a list of any terms and definitions needed to understand this document."
                ]
            },
            {
                "object":"package",
                "name": "Appendices",
                "instructions":[
                    "Appendices may be used to provide information published separately for convenience in document maintenance (e.g., charts classified data). As applicable, each appendix shall be referenced in the main body of the document where the data would normally have been provided. Appendixes may be bound as separate documents for ease in handling. Appendixes shall be lettered alphabetically (A, B, etc.)."
                ]
            }
        ]
    }
]
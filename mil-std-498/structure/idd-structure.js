const IDD_STRUCTURE = [
    {
        "object": "package",
        "name": "Interface Design Description",
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
                    "The IDD describes the interface characteristics of one or more interfaces between systems, subsystems, HWCIs, CSCIs, manual operations or other system components and traces that design to system/subsystem or software requirements.",
                    "This section identifies the systems, subsystems, HWCIs, CSCIs, manual operations or other system components that this specification applies to, describes these entities and provides an overview of the document."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Identification",
                        "instructions": [
                            "This paragraph shall contain a full identification of the system or subsystem to which this document applies, including, as applicable, identification number(s), title(s), abbreviation(s), version number(s), and release number(s)."
                        ],
                        "text": [
                            "This design description applies to the XXXXXXXXXX."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "System/Subsystem Overview",
                        "instructions": [
                            "This paragraph shall briefly state the purpose of the system or subsystem to which this document applies. It shall describe the general nature of the system or subsystem; summarize the history of system development, operation, and maintenance; identify the project sponsor, acquirer, user, developer, and support agencies; identify current and planned operating sites; and list other relevant documents."
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
                            "The structure of this document is based on DID DI-IPSC-81436A, \"Interface Design Description\", dated December 15, 1999. The document structure may deviate from the DID to facilitate publishing the document from the contents of a UML/SysML database.",
                            "This document is organized as follows:",
                            "Section 1. Scope: Identifies the scope of this document.",
                            "Section 2. Referenced Documents: Identifies all documents that are referenced in this document.",
                            "Section 3. Interface Design: XXXXXXXXXXXXXXXXXXXXXXX.",
                            "Section 4. Requirements Traceability: XXXXXXXXXXXXXXXXXX.",
                            "Section 5. Notes: Contains a listing of acronyms and terms used in this document and their definition."
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
                "object":"package",
                "name": "Interface Design",
                "instructions":[
                    "This paragraph shall be divided into the following subparagraphs to describe the interface characteristics of the system components. It shall include both interfaces among the components and their interfaces with external entities such as other systems, configuration items, and users. Note: There is no requirement for these interfaces to be completely designed at this level; this paragraph is provided to allow the recording of interface design decisions made as part of system architectural design. If part or all of this information is contained in IDDs or elsewhere, these sources may be referenced."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Interface Identification and Diagrams",
                        "instructions":[
                            "This paragraph shall state the project-unique identifier assigned to each interface and shall identify the interfacing entities (systems, configuration items, users, etc.) by name, number, version, and documentation references, as applicable. The identification shall state which entities have fixed interface characteristics (and therefore impose interface requirements on interfacing entities) and which are being developed or modified (thus having interface requirements imposed on them). One or more interface diagrams shall be provided, as appropriate, to depict the interfaces."
                        ]
                    },
                    {
                        "object":"package",
                        "name": "Interfaces",
                        "instructions":[
                            "This paragraph shall identify each interface by project-unique identifier, shall briefly identify the interfacing entities, and shall be divided into subparagraphs as needed to describe the interface characteristics of one or both of the interfacing entities. If a given interfacing entity is not covered by this SSDD (for example, an external system) but its interface characteristics need to be mentioned to describe interfacing entities that are, these characteristics shall be stated as assumptions or as \"When [the entity not covered] does this, [the entity that is covered] will...\" This paragraph may reference other documents (such as data dictionaries, standards for protocols, and standards for user interfaces) in place of stating the information here. The design description shall include the following, as applicable, presented in any order suited to the information to be provided, and shall note any differences in these characteristics from the point of view of the interfacing entities (such as different expectations about the size, frequency, or other characteristics of data elements):",

                            "\ta. Priority assigned to the interface by the interfacing entity(ies).",

                            "\tb. Type of interface (such as real-time data transfer, storage-and-retrieval of data, etc.) to be implemented.",

                            "\tc. Characteristics of individual data elements that the interfacing entity(ies) will provide, store, send, access, receive, etc., such as:",

                            "\t\t1) Names/identifiers:",

                            "\t\t\ta) Project-unique identifier.",

                            "\t\t\tb) Non-technical (natural-language) name.",

                            "\t\t\tc) DoD standard data element name.",

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

                            "\td. Characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) that the interfacing entity(ies) will provide, store, send, access, receive, etc., such as:",

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

                            "\te. Characteristics of communication methods that the interfacing entity(ies) will use for the interface such as:",

                            "\t\t1) Project-unique identifier(s).",

                            "\t\t2) Communication links/bands/frequencies/media and their characteristics.",

                            "\t\t3) Message formatting.",

                            "\t\t4) Flow control (such as sequence numbering and buffer allocation).",

                            "\t\t5) Data transfer rate, whether periodic/aperiodic, and interval between transfers.",

                            "\t\t6) Routing, addressing, and naming conventions.",

                            "\t\t7) Transmission services, including priority and grade.",

                            "\t\t8) Safety/security/privacy considerations, such as encryption, user authentication, compartmentalization, and auditing.",

                            "\tf. Characteristics of protocols that the interfacing entity(ies) will use for the interface, such as:",

                            "\t\t1) Project-unique identifier(s).",

                            "\t\t2) Priority/layer of the protocol.",

                            "\t\t3) Packeting, including fragmentation and reassembly, routing, and addressing.",

                            "\t\t4) Legality checks, error control, and recovery procedures.",

                            "\t\t5) Synchronization, including connection establishment, maintenance, termination.",

                            "\t\t6) Status, identification, and any other reporting features.",

                            "\tg. Other characteristics, such as physical compatibility of the interfacing entity(ies) (dimensions , tolerances, loads, voltages, plug compatibility, etc.)."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Requirements Traceability",
                "instructions":[
                    "This section shall contain:",
                    "\ta. Traceability from each system component identified in this SSDD to the system requirements allocated to it. (Alternatively, this traceability may be provided in 4.1.)",
                    "\tb. Traceability from each system requirement to the system components to which it is allocated."
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